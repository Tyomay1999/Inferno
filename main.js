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
    document.getElementsByClassName('input')[0].value = '';
    document.getElementsByClassName('input')[1].value = '';
    document.getElementsByClassName('input')[2].value = '';
    document.getElementsByClassName('input')[3].value = '';

};

document.getElementById('create').addEventListener('click', createCourse);

//----------------------------------------------delet-------------------------------------------
const deleteCourse = (id) => {
    courses.child(id).remove()

}
//-----------------------------------------------------edit---------------------------------------------
const editCourse = (id) => {
    document.querySelector('#general').style.display = 'none';
    const modal = document.getElementById('modal')
    modal.innerHTML = `
            <label for="Name">Course Name</label>
            <input type="text" placeholder="Course Name" id="Name">
            <label for="Price">Course Price</label>
            <input type="text" placeholder="Course Price" id="Price">
            <label for="Description">Course Description</label>
            <input type="text" placeholder="Course Description" id="Description">
            <label for="Logo">IMG</label>
            <input type="text" placeholder="IMG URL" id="Logo">
            <button id="edit">edit</button>
    `
    const editButton = document.getElementById('edit');
    editButton.addEventListener('click', () => {
        const newCours = {
            coursesName: byId('Name'),
            coursePrice: byId('Price'),
            courseDescription: byId('Description'),
            courseLogo: byId('Logo')
        }
        courses.child(id).update(newCours)
        document.querySelector('#general').style.display = 'block';
        modal.innerHTML = ''
        modal.style.display = 'none'
    })

}
//--------------------------------------------------add---------------------------------------------
const addCourse = (id) => {

}
//-----------------------------------------------------------------------------------------------------------
(function () {
    const courseList = document.getElementById('courseList');
    courses.orderByKey().on('value', data => {
        courseList.innerHTML = '';
        Object.entries(data.val()).map((data) => {

            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const img = document.createElement('img');
            const delet = document.createElement('button');
            const span = document.createElement('span');
            const add = document.createElement('button');
            const edit = document.createElement('button');
            h2.innerHTML = data[1].coursesName;
            p.innerHTML = data[1].courseDescription;
            img.src = data[1].courseLogo;
            span.innerHTML = data[1].coursePrice;
            add.innerHTML = 'Add';
            edit.innerHTML = 'Edit';
            delet.innerHTML = 'delete';
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(img);
            div.appendChild(delet);
            div.appendChild(add);
            div.appendChild(edit);
            courseList.appendChild(div);
            delet.addEventListener('click', (e) => {
                e.preventDefault();
                deleteCourse(data[0])
            })
            edit.addEventListener('click', (e) => {
                e.preventDefault();
                editCourse(data[0])
            })
        })
    })
})()