const Goal = require("../models/Goal");

module.exports = {
  getGoals: async (req, res) => {
    try {
      const goals = await Goal.find().lean();
      res.json(goals);
    } catch (err) {
      console.error(err);
    }
  },
  updateGoal: async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id)
        goal.complete = !goal.complete
        goal.save()
      res.json(goal);
    } catch (err) {
      console.error(err);
    }
  },
  createGoal: async (req, res) => {
    try {
      const goal = await Goal.create(req.body)
      res.json(goal);
    } catch (err) {
      console.error(err);
    }
  },
  deleteGoal: async (req, res) => {
    try {
      await Goal.findOneAndDelete({_id: req.params.id});
      res.json(req.params.id);
    } catch (err) {
      console.error(err);
    }
  },
};
