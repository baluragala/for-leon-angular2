import {ICourse} from './ICourse';

export interface ICourseService{
    getCourses():Array<ICourse>
}