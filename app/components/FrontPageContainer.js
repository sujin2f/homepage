import ReduxWrapper from 'src/ReduxWrapper';

import FrontPage from './FrontPage';

const mapStateToProps = state => ({ ...state.page });

const mapDispatchToProps = () => ({
});

export default ReduxWrapper(mapStateToProps, mapDispatchToProps, FrontPage);
