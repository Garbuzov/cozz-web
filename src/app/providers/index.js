import { compose } from "redux";
import { withRouter } from "./router";

export const withProviders = compose(withRouter);