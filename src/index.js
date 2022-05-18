import './styles/styles.css';
import exitTaskPrompt from './utils/exit-task-prompt.js';
import taskAdd from './utils/task-add.js';
import taskPrompt from './utils/task-prompt.js';
import taskDelete from './utils/task-delete.js';
import groupsDropdown from './utils/groups-dropdown.js';
import menuActive from './utils/menu-active.js';
import groupSort from './utils/group-sort.js';
import datesSort from './utils/dates-sort.js';

taskPrompt();
exitTaskPrompt();
taskAdd();
taskDelete();
groupsDropdown();
menuActive();
groupSort();
datesSort();

