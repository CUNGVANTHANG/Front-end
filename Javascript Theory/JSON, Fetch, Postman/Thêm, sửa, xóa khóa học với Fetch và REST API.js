var listCoursesBlock = document.querySelector('#list-courses');

var courseApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);
    handleCreateForm();
    
}

start();

// Functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');

    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description, description
        }
        createCourse(formData, function() {
            getCourses(renderCourses);
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
        });
    }
}

function updateCourse(id, data, callback) {
    // Gửi yêu cầu cập nhật lên server
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleUpdateCourse(id) {
    // Hiện thị form chỉnh sửa
    var name = document.querySelector('.course-item-' + id + ' h4').innerText;
    var description = document.querySelector('.course-item-' + id + ' p').innerText;
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;

    // Xử lý sự kiện submit khi chỉnh sửa
    var updateBtn = document.querySelector('#create');
    updateBtn.innerText = 'Update';
    updateBtn.onclick = function() {
        var updateName = document.querySelector('input[name="name"]').value;
        var updateDescription = document.querySelector('input[name="description"]').value;
        var updateData = {
            name: updateName,
            description: updateDescription,
        }
        updateCourse(id, updateData, function() {
            getCourses(renderCourses);
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
            updateBtn.innerText = 'Create';
            handleCreateForm();
        })
    }


}