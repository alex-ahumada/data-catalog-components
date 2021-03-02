import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

class BasicBlock extends React.PureComponent {
  render() {
    const { content } = this.props;
    const img = content.image ? <div><img alt="" src={content.image} /></div> : null;

    let block = '';

    if (content.ref) {
      block = (
        <div key={content.ref} className="basic-block">
          <h2>
            <Link to={content.ref}>
              {img}
              {content.title}
            </Link>
          </h2>
          <div>{content.teaser}</div>
        </div>
      );
    } else {
      block = (
        <div key={content.title} className="basic-block">
          <h2>
            {img}
            {content.title}
          </h2>
          <div>{content.teaser}</div>
        </div>
      );
    }

    return (
      <>
        {block}
      </>
    );
  }
}

BasicBlock.defaultProps = {
  content: [
    {
      title: '',
      content: '',
      image: '',
      teaser: '',
      ref: '',
    },
  ],
};

BasicBlock.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    teaser: PropTypes.string,
    image: PropTypes.string,
    ref: PropTypes.string,
  })),
};

export default BasicBlock;
