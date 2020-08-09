import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Categories from "../categories";

describe('Categories', () => {
    describe('testing clubs are split into the right categories', () => {
        const expectedResult1 = [{
            "Name": "Soccer Society",
            "Category": "Sport",
            "Description": "Is it soccer or is it football? Even we don't know!",
            "Contact - Email": "soccersociety@gmail.com",
            "Contact - Phone": "0800420000",
            "Event 1": "Soccer Game 1",
            "Event 2": "Soccer Game 2",
            "Recommended": "Medical Students' Association",
            "Photo": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1156&q=80"
        },
        {
            "Name": "Cricket Company",
            "Category": "Sport",
            "Description": "East or west, cricket is the best!",
            "Contact - Email": "cricketcompany@gmail.com",
            "Contact - Phone": "0800420001",
            "Event 1": "Cricket Game 1",
            "Event 2": "Cricket Game 2",
            "Recommended": "Law Students' Association",
            "Photo": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",
            "undefined": "Categories"
        },
        {
            "Name": "Basketball Bunch",
            "Category": "Sport",
            "Description": "Ball goes SWOOSH! RIP Kobe.",
            "Contact - Email": "basketballbunch@gmail.com",
            "Contact - Phone": "0800420002",
            "Event 1": "Basketball Game 1",
            "Event 2": "Basketball Game 2",
            "Recommended": "CompSci Students' Association",
            "Photo": "https://images.unsplash.com/photo-1523142096306-cca37b5aa001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "undefined": "Sport"
        },
        {
            "Name": "Hockey Heroes",
            "Category": "Sport",
            "Description": "Life is Hockey, hockey is life.",
            "Contact - Email": "hockeyheroes@gmail.com",
            "Contact - Phone": "0800420003",
            "Event 1": "Hockey Game 1",
            "Event 2": "Hockey Game 2",
            "Recommended": "Christian Circle",
            "Photo": "https://images.unsplash.com/photo-1541983663620-7571a820610c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "undefined": "Academic"
        },
        {
            "Name": "University of Auckland Badminton Club",
            "Category": "Sport",
            "Description": "We're GOOD at BADminton.",
            "Contact - Email": "universityclub@gmail.com",
            "Contact - Phone": "0800420004",
            "Event 1": "Badminton Game 1",
            "Event 2": "Badminton Game 2",
            "Recommended": "Hindu Hangout",
            "Photo": "https://images.unsplash.com/photo-1562050061-9f9c55b807e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "undefined": "Religious"
        },
        {
            "Name": "Rugby Ring",
            "Category": "Sport",
            "Description": "If you're not tough enough to play Rugby, there's always football.",
            "Contact - Email": "rugbyring@gmail.com",
            "Contact - Phone": "0800420005",
            "Event 1": "Rugby Game 1",
            "Event 2": "Rugby Game 2",
            "Recommended": "Buddhist Bunch",
            "Photo": "https://images.unsplash.com/photo-1512299286776-c18be8ed6a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "undefined": "Cultural"
        }];
        it('Should return an array size 6 for Sport', () => {
            const wrapper = mount(<Categories category={"Sport"} />)
            expect(wrapper.find('ClubCard')).to.have.lengthOf(6);
        });
    });
});
