import React from 'react'

const Batches = () => {
  return (
    <div className="container" id='batches'>
      <div className=''>
        <h1>Upcoming <span className='text-danger'>Batches</span></h1>
      </div>
      <div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table table-boardered">
              <tr className="table-dark">
                <th>Course</th>
                <th>Date</th>
                <th>Timings</th>
                <th>Duration</th>
                <th>Trainer</th>
                <th>Register for Demo</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>MERN Stack Development</td>
                <td>12-OCT-2023</td>
                <td>5:00 PM - 6:00 PM</td>
                <td>90 days</td>
                <td>Mr.Bharghav</td>
                <td><a href="https://hyderabadittrainings.com/mern-fullstack-developer-course-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>Python Fullstack Development</td>
                <td>12-OCT-2023</td>
                <td>8:00 AM - 9:00 AM</td>
                <td>90 days</td>
                <td>Mr. Sudheer</td>
                <td><a href="https://hyderabadittrainings.com/python-fullstack-developer-course-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>UIUX Designing</td>
                <td>9-OCT-2023</td>
                <td>4:00 PM - 5:00 PM</td>
                <td>90 days</td>
                <td>Mr.Shakthivel</td>
                <td><a href="https://hyderabadittrainings.com/ui-ux-designing-course-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>UI Development</td>
                <td>12-OCT-2023</td>
                <td>5:00 PM - 6:00 PM</td>
                <td>70 Days</td>
                <td>Mr.Bharghav</td>
                <td><a href="https://hyderabadittrainings.com/ui-developer-course-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>Python with DJango</td>
                <td>12-OCT-2023</td>
                <td>8:00 AM - 9:00 AM</td>
                <td>45 days</td>
                <td>Mr. Sudheer</td>
                <td><a href="https://hyderabadittrainings.com/python-training-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>Web Designing</td>
                <td>12-OCT-2023</td>
                <td>5:00 PM - 6:00 PM</td>
                <td>45 days</td>
                <td>Mr.Bharghav</td>
                <td><a href="https://hyderabadittrainings.com/web-designing-course-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>React JS</td>
                <td>11-OCT-2023</td>
                <td>9.00 AM to 10.00 AM</td>
                <td>25 Days</td>
                <td>Mr.Bharghav</td>
                <td><a href="https://hyderabadittrainings.com/reactjs-training-hyderabad.php">Register Now</a></td>
              </tr>
              <tr >
                <td>Node JS</td>
                <td>09-OCT-2023</td>
                <td>9:00 AM - 10:00 AM</td>
                <td>25 Days</td>
                <td>Mr.Chandrashekar</td>
                <td><a href="https://hyderabadittrainings.com/">Register Now</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Batches
