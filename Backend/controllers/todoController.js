const todoModel = require('../Models/todoModel');

const getTodo = async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        const newTodo = new todoModel({ task, status });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postManyTodo = async (req, res) => {
    try {
        const todos = await todoModel.insertMany(req.body);
        res.status(201).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, status } = req.body;
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            { task, status },
            { new: true, runValidators: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await todoModel.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTodo,
    postTodo,
    postManyTodo,
    updateTodo,
    deleteTodo
};