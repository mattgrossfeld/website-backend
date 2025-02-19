const pool = require('../databasePool');
const constants = require('../queries/threadsQueries');
const Thread = require('../models/thread');

const getThreadById = (threadId) => {
    pool.query(constants.GET_THREAD_BY_ID, [threadId], (error, results) => {
        if (error) {
            throw error;
        }
        thread = new Thread();
        thread.setId(response.rows[0].id);
        thread.setTitle(response.rows[0].title);
        thread.setBody(response.rows[0].body);
        thread.setCreatedTm(response.rows[0].createdTm);
        thread.setCreatedBy(response.rows[0].createdBy);
        thread.setModifiedBy(response.rows[0].modifiedBy);
        thread.setModifiedTm(response.rows[0].modifiedTm);
        return thread;
    });
};

const insertThread = (params) => {
    pool.query(constants.INSERT_THREAD, [params.title, params.body, params.created_tm, params.modified_tm, params.created_by, params.modified_by], (error, results) => {
        if (error) {
            throw error;
        }

        thread = new Thread();
        thread.setId(response.rows[0].id);
        thread.setTitle(response.rows[0].title);
        thread.setBody(response.rows[0].body);
        thread.setCreatedTm(response.rows[0].createdTm);
        thread.setCreatedBy(response.rows[0].createdBy);
        thread.setModifiedBy(response.rows[0].modifiedBy);
        thread.setModifiedTm(response.rows[0].modifiedTm);
        return thread;
    });
};

module.exports = { getThreadById, insertThread };