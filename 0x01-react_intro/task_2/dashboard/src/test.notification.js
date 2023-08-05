import React from "react";
import { shallow } from 'enzyme'
import { getFooterCopy, getFullYear, getLatestNotification, } from "./utils";
import MyNotifications from "./Notifications";

describe('MyNotifications Component ', () => {
    it ('renders without crashing', () => {
        shallow(<MyNotifications />)
    })

    it('Displays the correct latest notification', () => {
        const expected = latestNotification
        const result = getLatestNotification()
        const wrapper = shallow(<MyNotifications />)
        const latestNotification = wrapper.find('div').prop('dangerouslySetInnerHTML').__html
        expected(expected).toBe(result)
    });

    it('Displayed the correct footer copy for index page', () => {
        const expected = footerCopy
        const result = "Holberton School"
        const wrapper = shallow(<MyNotifications />)
        const footerCopy = wrapper.find(p).text()
        expected(expected).toBe(result)
    })

    it ('Displays the corect footer copy on a non-index page', () => {
        
        const wrapper = shallow(<MyNotifications isIndex={false} />)
        const expected = footerCopy
        const result = "Holberton School main dashboard"
        const footerCopy = wrapper.find('p').text()
        expected(expected).toBe(result)
    })
})