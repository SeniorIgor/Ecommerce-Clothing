"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const path_1 = __importDefault(require("path"));
const payment_1 = __importDefault(require("./routes/payment"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
    app.get('*', function (_, res) {
        res.sendFile(path_1.default.join(__dirname, 'client/build/index.html'));
    });
}
app.use('/payment', payment_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log('Server running on port', port);
});
