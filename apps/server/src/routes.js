const express = require('express');

const { signupController, loginController, findUserByEmailController } = require('./controllers/auth.controller');
const { authorize } = require('./middlewares/auth.middleware');
const { addNewExpenseController, getAllExpensesController, getExpenseByIdController, editExpenseController } = require('./controllers/expense.controller');
const { getStatsController } = require('./controllers/stats.controller');
const { createNewSplitController } = require('./controllers/split.controller');
const { getAllCategoriesController, getCategoryByIdController, addNewCategoryController } = require('./controllers/category.controller');
const { addNewFriendController, getAllFriendsController, addNewFriendRequestController, getAllFriendRequestsController, acceptFriendRequestConroller } = require('./controllers/friend.controller');

const router = express.Router();

// Auth routes
router.post("/auth/signup", async (req, res) => {
    signupController(req, res);
});

router.post("/auth/login", async (req, res) => {
    loginController(req, res);
});

router.get("/user/:email", (req, res) => {
    findUserByEmailController(req, res);
});

// Expense routes
router.get("/expense", authorize, (req, res) => {
    getAllExpensesController(req, res);
});

router.get("/expense/:id", authorize, (req, res) => {
    getExpenseByIdController(req, res);
});

router.post("/expense", authorize, (req, res) => {
    addNewExpenseController(req, res);
});

router.put("/expense/:id", authorize, (req, res) => {
    editExpenseController(req, res);
});

// Split routes
router.post("/split", authorize, (req, res) => {
    createNewSplitController(req, res);
});

// Category routes
router.get("/category", authorize, (req, res) => {
    getAllCategoriesController(req, res);
});

router.get("/category/:id", authorize, (req, res) => {
    getCategoryByIdController(req, res);
});

router.post("/category", authorize, (req, res) => {
    addNewCategoryController(req, res);
});

router.put("/category/:id", authorize, (req, res) => {
    res.send("Update category");
});


// Stats routes
router.get("/stats", authorize, (req, res) => {
    getStatsController(req, res);
});

router.get('/', (req, res) => {
    res.send('Yo');
});

// Friend request routes
router.post("/friendrequest", authorize, (req, res) => {
    addNewFriendRequestController(req, res);
});

router.get("/friendrequest", authorize, (req, res) => {
    getAllFriendRequestsController(req, res);
});

router.post("/friend", authorize, (req, res) => {
    acceptFriendRequestConroller(req, res);
});

// Friend routes
router.get("/friend", authorize, (req, res) => {
    getAllFriendsController(req, res);
});


module.exports = router;
