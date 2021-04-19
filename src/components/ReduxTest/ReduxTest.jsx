import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

// actions
import { appLoading, appLoaded } from '../../actions/app.actions';
// reducers
import { getAppLoading, getAppLoaded } from '../../reducers/app.reducers';

const ReduxTest = ({ _appLoading, _appLoaded, hasLoaded, isLoading }) => {
    useEffect(() => {
        _appLoading();
        const loadTimer = setTimeout(() => _appLoaded(), 1500);
        return () => {
            clearTimeout(loadTimer);
        };
    }, []);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {hasLoaded && <h1>Hello World!</h1>}
        </div>
    );
};

ReduxTest.propTypes = {
    _appLoading: func.isRequired,
    _appLoaded: func.isRequired,
    hasLoaded: bool.isRequired,
    isLoading: bool.isRequired,
};

const mapStateToProps = (state) => ({
    hasLoaded: getAppLoaded(state),
    isLoading: getAppLoading(state),
});

const mapDispatchToProps = {
    _appLoading: appLoading,
    _appLoaded: appLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
