import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const id = useParams();
    const {user} = UseAuth();
    const navigate = useNavigate();
    
    const submitJobApplication = async (e) => {
        e.preventDefault();

        const form = e.target;
        const skills =  form.skills.value;
        const experience =  form.experience.value;
        const whyHire =  form.whyHire.value;
        const minSalary = form.minSalary.value;
        const maxSalary = form.maxSalary.value;
        const portfolio =  form.portfolio.value;
        const linkedIn =  form.linkedIn.value;
        const resume =  form.resume.value;
        const preferredLocation = form.preferredLocation.checked;
        const skillsMatch = form.skillsMatch.checked;
        const responsibilities = form.responsibilities.checked;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            skills,
            experience,
            whyHire,
            minSalary,
            maxSalary,
            portfolio,
            resume,
            preferredLocation,
            skillsMatch,
            responsibilities
        }
        
        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    };

    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center mb-6">Apply Job and Good Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                {/* Career Summary Section */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Skills</span>
                    </label>
                    <textarea
                        name="skills"
                        placeholder="List your skills"
                        className="textarea textarea-bordered"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Experience</span>
                    </label>
                    <textarea
                        name="experience"
                        placeholder="Describe your experience"
                        className="textarea textarea-bordered"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Why Should We Hire You?</span>
                    </label>
                    <textarea
                        name="whyHire"
                        placeholder="Explain why we should hire you"
                        className="textarea textarea-bordered"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Salary (BDT)</span>
                    </label>
                    <input
                        type="number"
                        name="minSalary"
                        placeholder="Enter minimum salary"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Maximum Salary (BDT)</span>
                    </label>
                    <input
                        type="number"
                        name="maxSalary"
                        placeholder="Enter maximum salary"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Portfolio Link</span>
                    </label>
                    <input
                        type="url"
                        name="portfolio"
                        placeholder="Portfolio URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn Link</span>
                    </label>
                    <input
                        type="url"
                        name="linkedIn"
                        placeholder="LinkedIn URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Link</span>
                    </label>
                    <input
                        type="url"
                        name="resume"
                        placeholder="Resume URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Checkboxes Section */}
                <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-4">
                        <input
                            type="checkbox"
                            name="preferredLocation"
                            className="checkbox checkbox-primary"
                        />
                        <span>Ready to work on preferred location</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-4">
                        <input
                            type="checkbox"
                            name="skillsMatch"
                            className="checkbox checkbox-primary"
                        />
                        <span>My skills align with the job requirements</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-4">
                        <input
                            type="checkbox"
                            name="responsibilities"
                            className="checkbox checkbox-primary"
                        />
                        <span>I believe I can resolve all the job responsibilities</span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Apply
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;
