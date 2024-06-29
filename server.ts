import App from "./app";
import UseRoute from './routes/user.route'


const app = new App([
    new UseRoute()
]);

console.log("sever")
app.listen();
