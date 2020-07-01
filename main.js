const byId = (id) => document.getElementById(id).value
// course
const database = firebase.database();
const courses = database.ref('/courses');

const createCourse = () => {
    const autoId = courses.push().key;
    courses.child(autoId).set({
        coursesName: byId('courseName'),
        coursePrice: byId('coursePrice'),
        courseDescription: byId('courseDescription'),
        courseLogo: byId('courseLogo')
    })
};

document.getElementById('create').addEventListener('click', createCourse);
// 

const deleteCourse = (id) => {
    courses.child(id).remove()

}

(function () {
    const courseList = document.getElementById('courseList');
    courses.orderByKey().on('value', data => {
        courseList.innerHTML = '';
        Object.entries(data.val()).map((data) => {

            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const img = document.createElement('img');
            const button = document.createElement('button');
            const span = document.createElement('span');
            h2.innerHTML = data[1].coursesName;
            p.innerHTML = data[1].courseDescription;
            img.src = data[1].courseLogo;
            span.innerHTML = data[1].coursePrice;
            button.innerHTML = 'delete';
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(img);
            div.appendChild(button);
            courseList.appendChild(div);

            button.addEventListener('click', () => {
                deleteCourse(data[0])
            })
        })
    })
})()