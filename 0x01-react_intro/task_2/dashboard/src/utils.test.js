import React from "react";
import { shallow } from 'enzyme'
import { getFullYear, getLatestNotification, getFooterCopy, getFullYear } from "./utils"
import MyNotifications from "./Notifications";


test('getLatestNotification should return the correct string', () => {
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    const result = getLatestNotification();
    expected(result).toBe(expected)
});

test ( 'getFooterCopy should return "Holberton School" wher the argument is true', () => {
    const expected = 'Holberton School'
    const isIndex = true
    const result = getFooterCopy(isIndex)
    expected(result).toBe(expected)
})

test ('getFooterCopy should return "Holberton School main dashboard" when the agument is true', () => {
    const expected = "Holberton School main dashboard"
    const isIndex = false
    const result = getFooterCopy(isIndex)
    expected(result).toBe(expected)

})

test ('getFullYear must retuen the correct year', () => {
    const expected = new Date().getFullYear()
    const result = 'Year'
    expected(getFullYear()).toBe(result)
})