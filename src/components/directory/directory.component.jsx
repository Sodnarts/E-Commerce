import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from './directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...props }) => (
            <MenuItem key={id} {...props} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
