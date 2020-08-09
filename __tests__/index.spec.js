/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from '../pages/index';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import Categories from "../components/categories";

describe('Index', () => {
  it('should render without throwing an error', function () {
    const wrapper = mount(<Index />)
  })
  describe('Should render main page elements', () => {
    test('display front-page with sidebar', () => {
      const wrapper = mount(<Index />);
      expect(wrapper.find(SideBar)).to.have.lengthOf(1);
    });
    test('display front-page with header', () => {
      const wrapper = mount(<Index />);
      expect(wrapper.find(Header)).to.have.lengthOf(1);
    });
    test('display front-page with footer', () => {
      const wrapper = mount(<Index />);
      expect(wrapper.find(Footer)).to.have.lengthOf(1);
    });
  });
  describe('should render club cards and categories correctly', () => {
    test('display 5 categories', () => {
      const wrapper = mount(<Index />);
      expect(wrapper.find('h1')).to.have.lengthOf(5);
      expect(wrapper.find(Categories)).to.have.lengthOf(5);
    });
  });
});