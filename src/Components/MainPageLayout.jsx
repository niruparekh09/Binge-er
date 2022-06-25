import React from 'react';
import Navs from './Navs.jsx';
import Title from './Title.jsx';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Binge-er"
        subtitle="What Movie/Series/Actor are you looking for"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
