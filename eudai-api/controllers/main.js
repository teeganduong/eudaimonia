
const getGoals = (req, res, db) => {
    db.where('user_id', req.params.userId).select('*').from('eu_goals')
        .then(goals => {
            if(goals.length){
                res.json(goals);
            } else {
                res.json({dataExists: 'false'});
            }
        })
        .catch(err => res.status(400).json({dbError: 'db error'}));
};

const getTasks = (req, res, db) => {
    db.where('goal_id', req.params.goalId).select('*').from('eu_tasks')
        .then(tasks => {
            if(tasks.length){
                res.json(tasks);
            } else {
                res.json({dataExists: 'false'});
            }
        })
        .catch(err => res.status(400).json({dbError: 'db error'}));
};

module.exports = {
    getGoals,
    getTasks
};
