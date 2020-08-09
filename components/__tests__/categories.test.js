import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Categories from "../categories";

describe('Categories', () => {
    describe('testing clubs are split into the right categories', () => {
        it('Should return an array size 6 for Sport', () => {
            const wrapper = mount(<Categories category={"Sport"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
        it('Should return an array size 6 for Sport', () => {
            const wrapper = mount(<Categories category={"Sport"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
        it('Should return an array size 6 for Academic', () => {
            const wrapper = mount(<Categories category={"Academic"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
        it('Should return an array size 5 for Religious', () => {
            const wrapper = mount(<Categories category={"Religious"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(5);
        });
        it('Should return an array size 6 for Cultural', () => {
            const wrapper = mount(<Categories category={"Cultural"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
        it('Should return an array size 6 for Causes', () => {
            const wrapper = mount(<Categories category={"Causes"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
    });
});
