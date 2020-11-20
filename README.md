# Navigation Tab Design Pattern 

1.TabNav Component: Creating the menu part of the tabs

2.Tab Component: Creating the content part of the tabs

## TabNav component

1. { this.props.children }  means that whenever we use the TabNav component, anything we nest inside of it will render there. For example, if we wrote <TabNav>Hello World</TabNav>, then “Hello World” would show up inside that div and right after the unordered list.

2. Tabs: An array of strings defining the names of the tabs

3.Selected: A string that is one of the tabs defined in the tabs array. It is the currently selected tab

4.SetSelected: A method that sets the currently selected tab

5.This this.props.tabs.map(tab => { is looping through every string in tabs. This const active = (tab === this.props.selected ? ‘active ‘ : ‘’ ); stores either a string of ‘active ‘ or an empty string into the variable called active. This is then used as a dynamic style. If this is the selected tab, then it is set to active.

## Tab Component

1.This component takes a prop called isSelected and if this tab is currently selected, it will show the elements nested inside of this Tab component. Otherwise, it returns null which renders nothing for that tab.

## Navigation Component:

Inside of the Navigation component we define state with selected inside. Also, we define the method to set that state.
