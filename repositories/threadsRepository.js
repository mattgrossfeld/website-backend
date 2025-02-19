const pool = require('../databasePool');
const constants = require('../queries/threadsQueries');
const Thread = require('../models/thread');

const getThreadById = (threadId) => {
    var thread = new Thread();
    pool.query(constants.GET_THREAD_BY_ID, [threadId], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        thread.setId(results.rows[0].id);
        thread.setTitle(results.rows[0].title);
        thread.setBody(results.rows[0].body);
        thread.setCreatedTm(results.rows[0].createdTm);
        thread.setCreatedBy(results.rows[0].createdBy);
        thread.setModifiedBy(results.rows[0].modifiedBy);
        thread.setModifiedTm(results.rows[0].modifiedTm);
    });
    return thread;
};

const insertThread = (params) => {
    var thread = new Thread();
    pool.query(constants.INSERT_THREAD, [params.title, params.body, params.created_tm, params.modified_tm, params.created_by, params.modified_by], (error, results) => {
        if (error) {
            throw error;
        }

        thread.setId(results.rows[0].id);
        thread.setTitle(results.rows[0].title);
        thread.setBody(results.rows[0].body);
        thread.setCreatedTm(results.rows[0].createdTm);
        thread.setCreatedBy(results.rows[0].createdBy);
        thread.setModifiedBy(results.rows[0].modifiedBy);
        thread.setModifiedTm(results.rows[0].modifiedTm);
    });
    return thread;
};

module.exports = { getThreadById, insertThread };