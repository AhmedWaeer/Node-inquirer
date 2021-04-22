const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = (answers) =>

    ` <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/tailwind.css" />
    <title>Document</title>
</head>


<body>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Applicant Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
            </p>
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                Full name
              </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" id="full-name">
                        ${answers.name}
                    </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                Application for
              </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        ${answers.position}
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                Email address
              </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        ${answers.email}
                    </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        $ ${answers.salary}
                    </dd>
                </div>
            </dl>
        </div>
    </div>

</body>

</html>`


inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'please enter your full Name',
        },
        {
            type: 'input',
            message: 'What position are you applying for?',
            name: 'position',
        },
        {
            type: 'input',
            message: 'please insert your email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'what is your expected salary?',
            name: 'salary',
        },
    ])
    .then((answers) => {

        const htmlPageContent = generateHtml(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });