document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('project-form');
    const projectList = document.getElementById('project-list');
    const taskForm = document.getElementById('task-form');
    const commentForm = document.getElementById('comment-form');
    const documentForm = document.getElementById('document-form');
    const roleForm = document.getElementById('role-form');

    // Arreglos para almacenar proyectos, tareas, comentarios, documentos y roles
    const projects = [];
    const tasks = [];
    const comments = [];
    const documents = [];
    const roles = [];

    // Código existente para manejar proyectos y tareas...

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const commentText = document.getElementById('comment-text').value;
        const taskID = document.getElementById('task-id').value;

        // Validar que la tarea existe
        const taskExists = tasks.some(task => task.id == taskID);
        if (!taskExists) {
            alert('El ID de la tarea no existe.');
            return;
        }

        // Crear un nuevo comentario
        const commentID = comments.length + 1; // Generar un ID único
        const comment = { id: commentID, text: commentText, taskID: taskID };
        comments.push(comment);

        // Mostrar el comentario en la lista de tareas
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Comentario:</strong> ${commentText} <br> <em>Tarea ID: ${taskID}</em>`;
        projectList.appendChild(listItem);

        // Limpiar el formulario
        commentForm.reset();
    });

    documentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const documentName = document.getElementById('document-name').value;
        const documentURL = document.getElementById('document-url').value;
        const projectID = document.getElementById('document-project-id').value;

        // Validar que el proyecto existe
        const projectExists = projects.some(project => project.id == projectID);
        if (!projectExists) {
            alert('El ID del proyecto no existe.');
            return;
        }

        // Crear un nuevo documento
        const documentID = documents.length + 1; // Generar un ID único
        const document = { id: documentID, name: documentName, url: documentURL, projectID: projectID };
        documents.push(document);

        // Mostrar el documento en la lista de proyectos
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Documento:</strong> ${documentName} <br> <em>Proyecto ID: ${projectID}</em>`;
        projectList.appendChild(listItem);

        // Limpiar el formulario
        documentForm.reset();
    });

    roleForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const roleName = document.getElementById('role-name').value;

        // Crear un nuevo rol
        const roleID = roles.length + 1; // Generar un ID único
        const role = { id: roleID, name: roleName };
        roles.push(role);

        // Mostrar el rol en la lista de roles
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Rol:</strong> ${roleName} <br> <em>ID: ${roleID}</em>`;
        projectList.appendChild(listItem);

        // Limpiar el formulario
        roleForm.reset();
    });
});
