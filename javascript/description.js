var descriptionRetrieved = localStorage.getItem('description_info');
    if (descriptionRetrieved) {
        var job = JSON.parse(descriptionRetrieved)
        document.getElementById('page-title').innerText = job.title
        document.getElementById('title').innerText = job.title
        document.getElementById('time').innerText = job.main_info.time
        document.getElementById('location').innerText = job.main_info.location
        document.getElementById('salary').innerText = job.main_info.salary
        document.getElementById('first_summary').innerText = job.summary.first
        document.getElementById('second_summary').innerText = job.summary.second
        document.getElementById('resp_one').innerText = job.responsibilities.one
        document.getElementById('resp_two').innerText = job.responsibilities.two
        document.getElementById('resp_three').innerText = job.responsibilities.three
        document.getElementById('resp_four').innerText = job.responsibilities.four
        document.getElementById('resp_five').innerText = job.responsibilities.five
        document.getElementById('req_one').innerText = job.requirements.one
        document.getElementById('req_two').innerText = job.requirements.two
        document.getElementById('req_three').innerText = job.requirements.three
        document.getElementById('req_four').innerText = job.requirements.four
        document.getElementById('req_five').innerText = job.requirements.five
        document.getElementById('req_six').innerText = job.requirements.six
        document.getElementById('req_seven').innerText = job.requirements.seven
        document.getElementById('req_eight').innerText = job.requirements.eight
        document.getElementById('req_nine').innerText = job.requirements.nine
        document.getElementById('pref_one').innerText = job.preferred.one
        document.getElementById('pref_two').innerText = job.preferred.two
        document.getElementById('role_number').innerText = job.role_number
    } else {
        window.location = "./error.html"
}
    