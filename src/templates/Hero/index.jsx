import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Input, Label, Button } from 'reactstrap';
import defaultTheme from '../../theme/default';

const Hero = ({
  alignment,
  title,
  intro,
  image,
  resetContent,
  includeReset,
  submitContent,
}) => {
  const [query, setQuery] = useState('');
  const background = image
    ? `url(${image})`
    : `linear-gradient(${defaultTheme.primaryDark}, ${defaultTheme.primary})`;
  async function handleSubmit(event) {
    event.preventDefault();
    let searchParams = '/search/';
    if (query) {
      searchParams = `/search/?fulltext=${query}`;
    }
    await navigate(searchParams);
  }

  return (
    <div className="dc-hero" style={{ backgroundImage: background }}>
      <div className={`block ${alignment}`}>
        <h1 className="hero-title">{title}</h1>
        <p>{intro}</p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Label className="sr-only" htmlFor="hero_search">Search</Label>
          <Input
            onChange={(event) => setQuery(event.target.value)}
            id="hero_search"
          />
          <Button type="submit">{submitContent}</Button>
          {(includeReset && query)
            && (
            <Button
              className="dc-hero-reset"
              type="reset"
              onClick={() => setQuery('')}
            >
              {resetContent}
            </Button>
            )}
        </form>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  alignment: 'center',
  title: 'Welcome to DKAN',
  intro: 'DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.',
  image: '',
  includeReset: true,
  resetContent: 'Clear',
  submitContent: 'Go'
};

Hero.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  alignment: PropTypes.string,
  image: PropTypes.string,
  resetContent: PropTypes.node,
  includeReset: PropTypes.bool,
  submitContent: PropTypes.node,
};

export default Hero;