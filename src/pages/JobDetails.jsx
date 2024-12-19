import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = useLoaderData();
    console.log(status);

    // Check if the application deadline has passed
    const isDeadlinePassed = new Date(applicationDeadline) < new Date();

    return (
        <div className="m-10">
            <div className="flex items-center gap-6 mb-10">
                <img src={company_logo} alt={`${company} logo`} className="w-20 h-20 rounded" />
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-xl text-gray-600">{company}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Job Type:</strong> {jobType}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Application Deadline:</strong> {applicationDeadline}</p>
                    <p>
                        <strong>Salary Range:</strong> {salaryRange.currency.toUpperCase()} {salaryRange.min} - {salaryRange.max}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
                    <p><strong>HR Name:</strong> {hr_name}</p>
                    <p><strong>HR Email:</strong> <a href={`mailto:${hr_email}`} className="text-blue-500">{hr_email}</a></p>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                <p>{description}</p>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc pl-6">
                    {requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-6">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                {isDeadlinePassed ? (
                    <p className="text-red-500 font-bold">
                        The application deadline has passed. You can no longer apply for this job.
                    </p>
                ) : (
                    <Link to={`/jobApply/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>   
                )}
            </div>
        </div>
    );
};

export default JobDetails;
