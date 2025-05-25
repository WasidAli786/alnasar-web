"use client";

import { Tabs, Tab } from "@heroui/tabs";

const Header = () => {
  return (
    <>
      <Tabs aria-label="Tabs sizes" size="sm" color='primary'>
        <Tab key="photos" title="EN" />
        <Tab key="music" title="AR" />
      </Tabs>
    </>
  );
};

export default Header;
