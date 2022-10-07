import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Index from './pages/index';

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default Routes;