---
description: Guidance on designing digital forms
title: Forms
status: draft
author: dlevineBC
---

# Form.

## Example 1 - Inline
### Component

<bcgov-form >
    <form >
        <ul>
            <li>
                <input type="radio" name="radio_input" checked /><label>First Choice</label>
                <input type="radio" name="radio_input" /><label>Second Choice</label>
                <input type="radio" name="radio_input" /><label>Third Choice</label>
            </li>
            <li>
                <label>My Text Element</label>
                <input type="text"  value="" placeholder="My Text Element" />
            </li>
            <li>
                <label>My Textarea Element</label>
                <textarea>This is my content</textarea>
            </li>
            <li><input type="checkbox" checked ><label>Checkbox 1</label></li>
            <li><input type="checkbox" ><label>Checkbox 2</label></li>
            <li><input type="checkbox" ><label>Checkbox 3</label></li>
            <li>
                <label>Select option</label>
                <select>
                    <option value="">Select Option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="none">Has a long option</option>
                </select>
            </li>
            <li> <input type="submit" value="submit" /></li>
        </ul>
    </form>
</bcgov-form>

## Example 2 - Block list
### Component

<form class="form-styles">
    <ul>
        <li>
            <div><input type="radio" name="radio_input" checked /><label>First Choice</label></div>
            <div><input type="radio" name="radio_input" /><label>Second Choice</label></div>
            <div><input type="radio" name="radio_input" /><label>Third Choice</label></div>
        </li>
        <li>
            <label>My Text Element</label>
            <div><input type="text"  value="" placeholder="My Text Element" /></div>
            <div><input disabled type="text"  value="" placeholder="My Text Element Disabled" /></div>
        </li>
        <li>
            <label>My Textarea Element</label>
            <div><textarea>This is my content</textarea></div>
        </li>
        <li>
            <div><input type="checkbox" checked ><label>Checkbox 1</label></div>
            <div><input type="checkbox" ><label>Checkbox 2</label></div>
            <div><input type="checkbox" ><label>Checkbox 3</label></div>
        </li>
        <li>
            <label>Select option</label>
            <div>
                <select>
                    <option value="">Select Option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="none">Has a long option</option>
                </select>
            </div>
        </li>
        <li> <input type="submit" value="submit" /></li>
    </ul>
</form>



## Example 2 - Block list
### Component
<bcgov-form >
    <form >
        <div>
            <input type="radio" name="radio_input" /><label>First Choice</label>
            <input type="radio" name="radio_input" /><label>Second Choice</label>
            <input type="radio" name="radio_input" /><label>Third Choice</label>
        </div>
        <div>
            <label>My Text Element</label>
            <input type="text"  value="" placeholder="My Text Element" />
        </div>
        <div>
            <label>My Textarea Element</label>
            <textarea>This is my content</textarea>
        </div>
        <div>
            <input type="checkbox" checked ><label>Checkbox 1</label>
            <input type="checkbox" ><label>Checkbox 2</label>
            <input type="checkbox" ><label>Checkbox 3</label>
        </div>
        <div>
            <label>Select option</label>
            <select>
                <option value="">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="none">Has a long option</option>
            </select>
        </div>
        <div> <input type="submit" value="submit" /></div>
    </form>
</bcgov-form>


## Example 2 - Block div
### Component

<form class="no-styles" >
    <ul>
        <li>
            <input type="radio" name="radio_input" /><label>First Choice</label>
            <input type="radio" name="radio_input" /><label>Second Choice</label>
            <input type="radio" name="radio_input" /><label>Third Choice</label>
        </li>
        <li> <input type="submit" value="submit" /></li>
    </ul>
</form>


<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
