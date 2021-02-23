import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {
    test("status should be in state", () => {
        const component = create(<ProfileStatus status="it's okey" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it's okey");
    });
    test("here is should be <span>", () => {
        const component = create(<ProfileStatus status="it's okey" />);
        const root = component.root;
        expect(root.findByType("span")).not.toBeNull();
    });
    test("here is should be <input> instead of span", () => {
        const component = create(<ProfileStatus status="it's okey" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it's okey");
    });
    test("here is should not be <input>", () => {
        const component = create(<ProfileStatus status="it's okey" />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it's okey" updateUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});