import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  useEffect(() => {
    // Closes the dropdown when the user clicks outside of it.
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 40px 0; /* Increased top/bottom padding for more space */
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 30px 0;
          }
          .footer-container {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

const StandardOperatingProcedures = () => {
  return (
    <div className="sop-container">
      <style>{`
        /* --- STYLES FOR THE SOP DOCUMENT --- */
        .sop-container {
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
          color: #333;
        }
        
        .sop-header-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .sop-main-title {
          font-size: clamp(1.8rem, 6vw, 3rem);
          font-weight: bold;
          color: #004d40;
          margin-bottom: 0.5rem;
        }

        .sop-update-date {
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
        }

        .sop-section-title {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 600;
          color: #004d40;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .sop-subsection-title {
          font-size: clamp(1rem, 3.5vw, 1.4rem);
          font-weight: 500;
          color: #00796b;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .sop-list-item {
          margin-bottom: 0.5rem;
        }

        .sop-list-item::marker {
          font-weight: bold;
          color: #004d40;
        }

        .sop-link {
          color: #00796b;
          text-decoration: underline;
          font-weight: 600;
        }

        .sop-link:hover {
          color: #004d40;
        }

        /* Responsive adjustments for the document content */
        @media (max-width: 768px) {
          .sop-container {
            padding: 20px;
          }
        }
      `}</style>
      <div className="sop-header-info">
        <h1 className="sop-main-title">Standard Operating Procedures</h1>
        <p className="sop-update-date">
          Dept. data last updated on :08/08/2025
        </p>
      </div>

      <h2 className="sop-section-title">A. SOP of PG & UG Laboratories</h2>
      <h3 className="sop-subsection-title">Spacing and Seating</h3>
      <ul>
        <li className="sop-list-item">
          The PG lab has the Seating capacity of 60 students with 1:1 computer
          facility.
        </li>
        <li className="sop-list-item">
          There is one more separate lab for UG students having seating capacity
          of 60 students with 1:1 computer facility.
        </li>
        <li className="sop-list-item">
          The Department has two Research Labs with seating capacities of 28 and
          25 students respectively.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Opening of Labs</h3>
      <ul>
        <li className="sop-list-item">
          Switching on MCB to start power supply to the labs.
        </li>
        <li className="sop-list-item">
          Cleaning and preparing the lab for the day.
        </li>
      </ul>
      <h3 className="sop-subsection-title">PG & UG Laboratories Services</h3>
      <ul>
        <li className="sop-list-item">
          All computers are used for conducting practical sessions of the
          students enrolled in UG & PG programs as per their time table.
        </li>
        <li className="sop-list-item">
          All the students of PG and UG are provided computers to carry out
          their practical assignments, software development and project work as
          per their time table.
        </li>
        <li className="sop-list-item">
          These labs are also used for:
          <ul>
            <li className="sop-list-item">conducting practical examinations</li>
            <li className="sop-list-item">lab assignments</li>
            <li className="sop-list-item">
              practical sessions of Workshops/ Conferences/FDPs organized by the
              Department of Computer Science
            </li>
            <li className="sop-list-item">
              Lab counseling sessions of CIT, BCA & MCA students of IGNOU in the
              evening hours.
            </li>
          </ul>
        </li>
        <li className="sop-list-item">
          Smooth running of the labs is aided by the availability of the lab
          manuals and updated software which serve as a procedural framework
          that delineates the laboratory activities.
        </li>
        <li className="sop-list-item">
          Both labs are equipped with Network Printers (LAN).
        </li>
      </ul>
      <h3 className="sop-subsection-title">Lab Operation</h3>
      <ul>
        <li className="sop-list-item">
          Software in both PG and UG labs are updated regularly. Few widely used
          software are Oracle, Python, MySQL, Java, J-Creator, Net Beans, and
          Dev C++ etc. Apart from these, other software and tools are installed
          as per the requirements of the students.
        </li>
        <li className="sop-list-item">
          Antivirus and software are updated timely.
        </li>
        <li className="sop-list-item">
          Students are required to make entries in the log register before using
          the system.
        </li>
      </ul>
      <h3 className="sop-subsection-title">System Maintenance</h3>
      <ul>
        <li className="sop-list-item">
          In case of troubleshooting, which in beyond our scope of repairing, we
          call appropriate technical expert available in and around Aligarh.
        </li>
      </ul>
      <h3 className="sop-subsection-title">UPS/AC Maintenance</h3>
      <ul>
        <li className="sop-list-item">
          For the UPS/AC maintenance whose warranty period has been expired,
          maintenance is done on the call basis by technical experts available
          in around Aligarh.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Computer Server</h3>
      <ol>
        <li className="sop-list-item">Opening of Server Racks</li>
        <li className="sop-list-item">Switch on all servers.</li>
        <li className="sop-list-item">Log in through User- Id and Password</li>
        <li className="sop-list-item">
          Access server through its name via different local machines in case of
          windows based server
        </li>
        <li className="sop-list-item">
          Linux server is accessed through putty installed on different local
          machines using following steps:
          <ol>
            <li className="sop-list-item">
              Start Putty on the local machines.
            </li>
            <li className="sop-list-item">
              Select SSH and provide IP of Linux Server.
            </li>
            <li className="sop-list-item">
              Provide user name and Password to access Linux server.
            </li>
            <li className="sop-list-item">Perform course activities.</li>
            <li className="sop-list-item">
              Exit from Putty after the activities.
            </li>
          </ol>
        </li>
        <li className="sop-list-item">
          Proper logout and Shutdown all servers at the end of office hour (if
          required).
        </li>
      </ol>

      <h2 className="sop-section-title">B. SOP of Research Lab</h2>
      <ul>
        <li className="sop-list-item">
          The Department of Computer Science has two Research Laboratories,
          which are open to faculty members and research scholars. These Labs
          are used to promote and facilitate research in cutting-edge areas for
          scientific research.
        </li>
        <li className="sop-list-item">
          The software installed in the computers are licensed and the
          Department follows standard procedure of procurement and usage in line
          with the University’s Central Computer Center.
        </li>
        <li className="sop-list-item">
          Each Ph.D. research scholar has to be present in the laboratory
          between 08:00 am to 04:00 pm for which marking of attendance in the
          log register is compulsory.
        </li>
        <li className="sop-list-item">
          Each research scholar has been allocated a computer system with recent
          configuration. He/She uses allocated computer exclusively for his/her
          research work and the configurations can be updated based on the
          requirements.
        </li>
        <li className="sop-list-item">
          Equipment's required for the setup of IoT lab have been purchased and
          setup is in progress.
        </li>
        <li className="sop-list-item">
          Both labs are equipped with Network Printers (LAN).
        </li>
      </ul>

      <h2 className="sop-section-title">C. SOP of Seminar Library</h2>
      <p>
        The Department of Computer Science, AMU is one of the oldest Computer
        Science Departments in India. It came into existence in the year
        1971.The Seminar Library provides services to the teachers and bona fide
        students of the Department as well as other readers of the University.
      </p>
      <h3 className="sop-subsection-title">Seminar Library</h3>
      <p>
        Seminar Library is famous for its collection of Books and Journals. The
        Seminar Library meets the needs of its students, academics and research
        scholars. The Seminar Library collection comprises of about
        10000+documents including books, Periodicals, dissertations and CDs.
        Total No’s of books are 8526 in the Seminar Library. (There are 4793
        books in computer Centre Accession Register and 3733 books are in the
        Accession Register of Department Computer Science). More than 1900
        Dissertations are available in the seminar library. More than 250
        lecture Notes on different Topics are also available in the Computer
        Science field.
      </p>
      <h3 className="sop-subsection-title">Objectives</h3>
      <p>
        Seminar Library of the Department of Computer Science, AMU has the
        following objectives:
      </p>
      <ol>
        <li className="sop-list-item">
          Arrange and Organize relevant and up to date resources according to
          need and requirements of the users.
        </li>
        <li className="sop-list-item">
          Adopt the latest tools and technologies to provide library services to
          the users.
        </li>
      </ol>
      <h3 className="sop-subsection-title">Library Timings</h3>
      <p>
        Timings of the Library is from 9:00 a.m. to 4:00 p.m. daily except
        holidays and Friday. Seminar Library open at 8:00 a.m. on Friday and
        closes at 12:30 p.m. (without lunch break)
      </p>
      <h3 className="sop-subsection-title">Library Membership Form</h3>
      <p>
        Faculties and Students may avail the library membership by filling
        offline form to use library resources, facilities and services. The link
        for the prescribed form is given below:
      </p>
      <ul>
        <li className="sop-list-item">
          <a
            href="https://api.amu.ac.in/storage//file/3/useful-download/1636970164.pdf"
            className="sop-link"
          >
            https://api.amu.ac.in/storage//file/3/useful-download/1636970164.pdf
          </a>
        </li>
        <li className="sop-list-item">
          <a
            href="https://api.amu.ac.in/storage//file/3/useful-download/1637220907.pdf"
            className="sop-link"
          >
            https://api.amu.ac.in/storage//file/3/useful-download/1637220907.pdf
          </a>
        </li>
      </ul>
      <h3 className="sop-subsection-title">
        Following Formalities are required by the students for membership
      </h3>
      <ul>
        <li className="sop-list-item">(a) Two passport size Photographs</li>
        <li className="sop-list-item">
          (b) Signature of the Library In charge:
        </li>
        <li className="sop-list-item">
          (c) Photocopy of the Admission Card/Continuation Form;
        </li>
      </ul>
      <h3 className="sop-subsection-title">
        Requirement for Teachers/Guest Faculty/Instructors/Staff
      </h3>
      <ul>
        <li className="sop-list-item">(a) Copy of Confirmation/Appointment:</li>
        <li className="sop-list-item">(b) Six Photographs:</li>
        <li className="sop-list-item">
          (Note: Guest Faculty/Instructor/Temporary staff of Department of
          Computer Science may become member by providing surety of two (02)
          library members.)
        </li>
      </ul>
      <p>
        After filling all the Entries Library Card handed over to users for
        issuing books and other resources.
      </p>
      <p>
        The cards are having three different colors depending on the years of
        students.
      </p>
      <ul>
        <li className="sop-list-item">1st year students (Yellow)</li>
        <li className="sop-list-item">2nd year students (white)</li>
        <li className="sop-list-item">3rd year students (Pink)</li>
      </ul>
      <p>
        Faculty/Guest Faculty/Staff/Research Scholar are provided library card
        with sky blue.
      </p>
      <h3 className="sop-subsection-title">Services</h3>
      <p>
        Seminar Library provides following services which majorly includes; Text
        books issue & return.
      </p>
      <h4 className="sop-subsection-title">1. Circulation</h4>
      <p>
        The Circulation Section of the Seminar Library provides open access for
        issuable books to the following persons; they are eligible for
        membership of the library.
      </p>
      <ul>
        <li className="sop-list-item">(a) Regular Faculty members.</li>
        <li className="sop-list-item">
          (b) Temporary Faculty/Guest Faculty/Instructor
        </li>
        <li className="sop-list-item">(c) Administrative Staff</li>
        <li className="sop-list-item">(d) Research Scholar</li>
        <li className="sop-list-item">(e) Students of the Department</li>
      </ul>
      <p>Use following steps to search the books of the seminar library.</p>
      <ol>
        <li className="sop-list-item">WEB OPAC</li>
        <li className="sop-list-item">
          mirror link OPAC (accessible within Campus)
          <ul>
            <li className="sop-list-item">
              (Home page of Maulana Azad Library)
            </li>
          </ul>
        </li>
        <li className="sop-list-item">
          OPEN ACCESS (Seminar Library)
          <ul>
            <li className="sop-list-item">(Software) LIBSYS7</li>
            <li className="sop-list-item">LOCATION</li>
            <li className="sop-list-item">(CC= denotes computer centre)</li>
            <li className="sop-list-item">(CS=denotes computer science)</li>
          </ul>
        </li>
      </ol>
      <h4 className="sop-subsection-title">2. Acquisition</h4>
      <p>
        Acquisition section of Maulana Azad Library (MAL) is responsible for the
        selection and purchase of materials or resources. In our university, The
        Department may select books/journals/E-books etc for standings orders
        and sent to Maulana Azad Library. They purchase/procure through
        registered Vendors only.
      </p>
      <h4 className="sop-subsection-title">3. Accessioning</h4>
      <p>
        “Accessioning” is the term used to describe the process of adding new
        materials to the library collection. There are two (02) types of
        Accession Register in our University. The main Accession Register in
        Maulana Azad Library.
      </p>
      <ul>
        <li className="sop-list-item">
          (a) MAL Accession Register: After purchasing the books, staffs of the
          library enters the details in MAL accession register,
        </li>
        <li className="sop-list-item">
          (b) Seminar Accession Register: The central library sends letter to
          Library in charge to collect books/journals and subsequently seminar
          in-charge makes entries in the separate Seminar Accession Register.
        </li>
      </ul>
      <h4 className="sop-subsection-title">4. Cataloguing</h4>
      <p>
        In library and Information Science, Cataloguing is the process of
        creating and representing information sources such as books/ journals in
        systematic manner and according to subjects.
      </p>
      <h4 className="sop-subsection-title">5. Classification</h4>
      <p>
        Classification is a system of knowledge organization by which library
        resources are arranged and ordered systematically through a scheme like
        Dewey Decimal Classification (DDC).
      </p>
      <h4 className="sop-subsection-title">6. Labeling & Pasting</h4>
      <p>
        Label and book pocket pasting is also very important work in the seminar
        library.
      </p>
      <h4 className="sop-subsection-title">7. Book Card Management</h4>
      <p>
        The book card is very essential for smooth issue & return system. Book
        card kept in the borrower’s card to identify that this book issued to
        particular members.
      </p>
      <h4 className="sop-subsection-title">8. Issue & Return</h4>
      <p>
        The Issue & Return Register maintained on daily basis, consist of the
        following column. Books issued to students for four (04) days, after
        that staff of the seminar library remind them telephonically.
      </p>
      <h4 className="sop-subsection-title">9. Reading Facility</h4>
      <p>
        The Seminar library is also providing Reading facility to users. The
        seating capacity of the Hall is thirty (30). Readers can use seminar
        library for reading books/papers/magazine within reading room. Following
        two (02) English News Papers and three (03) current magazines related to
        Computer Science are available for reading in the seminar library only.
      </p>
      <ul>
        <li className="sop-list-item">i) The Hindustan Times (News Paper)</li>
        <li className="sop-list-item">ii) The Indian Express (News Paper)</li>
        <li className="sop-list-item">iii) Digit (Magazine)</li>
        <li className="sop-list-item">iv) PC QUEST (Magazine)</li>
        <li className="sop-list-item">v) Open Source (Magazine)</li>
      </ul>
      <p>(Note: Subscription stop due to Covid-19)</p>
      <h4 className="sop-subsection-title">
        10. Other Books/Materials Available
      </h4>
      <ul>
        <li className="sop-list-item">(a) Syllabus (MCA)</li>
        <li className="sop-list-item">(b) Question Papers (Previous years)</li>
        <li className="sop-list-item">(c) Lab Manuals (MCA)</li>
        <li className="sop-list-item">(d) Lab Manual (BCA)</li>
        <li className="sop-list-item">
          (e) Department Placements Brochure (2014-2021)
        </li>
        <li className="sop-list-item">(f) Reference Services</li>
      </ul>
      <h4 className="sop-subsection-title">11. Reference Services</h4>
      <p>
        The Reference Service also provided to the students for GRE, GATE, NET,
        preparation. Dissertation of last year’s students of MCA are also
        maintained starting from 1973 till date, for references / Guidance
        purpose only.
      </p>
      <h4 className="sop-subsection-title">12. Clearance/LPC</h4>
      <p>
        Clearance facility is provided to the passed out students and the
        retiring/working staff of the Department as well as University.
      </p>
      <h4 className="sop-subsection-title">13. Daily Attendance</h4>
      <p>
        There is one footfall Register (Daily Attendance) which is available in
        the seminar library for maintaining daily Attendance.
      </p>

      <h2 className="sop-section-title">D. SOP of Office</h2>
      <h3 className="sop-subsection-title">
        Opening and Closing of the Department
      </h3>
      <ul>
        <li className="sop-list-item">
          Collecting the Keys from Chairperson’s residence to unlock the
          Department.
        </li>
        <li className="sop-list-item">
          Cleaning and Dusting by the persons allotted duty on rotation.
          <ul>
            <li className="sop-list-item">a. Chairperson Room</li>
            <li className="sop-list-item">b. Office of the Chairperson</li>
            <li className="sop-list-item">c. Rooms of the Faculty Members</li>
            <li className="sop-list-item">
              d. U.G Lab, P.G Lab and Research Labs
            </li>
            <li className="sop-list-item">e. Seminar Library</li>
            <li className="sop-list-item">f. Board Room</li>
            <li className="sop-list-item">g. Conference Room</li>
            <li className="sop-list-item">h. Smart Classroom.</li>
          </ul>
        </li>
        <li className="sop-list-item">
          Switch off all the lights, fans or A.Cs (if any), also closing windows
          of all the rooms after 04:05 pm on all Working days and 12:40 pm on
          Friday.
        </li>
        <li className="sop-list-item">
          Locking up the Classrooms, Conference Room, Seminar Library, Board
          Room and finally the Office.
        </li>
        <li className="sop-list-item">
          Switching on the lights of gallery and main entrance.
        </li>
        <li className="sop-list-item">
          Handover the keys to the Chairperson’s residence.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Work Allocation</h3>
      <p>
        All Non-Teaching staff works according to Duty Allocation Chart
        consisting of timing of duty and nature of work (Changes as per
        requirement).
      </p>
      <h3 className="sop-subsection-title">Attendance Register Maintenance</h3>
      <ul>
        <li className="sop-list-item">
          Every office staff comes in time for duty and marks attendance in the
          Register meant for Non- Teaching Staff.
        </li>
        <li className="sop-list-item">
          All Research Scholars also mark their attendance on Attendance
          Register in the office before allocated time.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Receive & Dispatch Letter</h3>
      <ul>
        <li className="sop-list-item">
          Letters / Envelopes received by the assigned person are recorded in
          the Receipt Register with a unique R.NO, along with date. However, the
          Confidential Letter / Envelop is opened by the office concerned and
          delivered to the person concerned or some time letter is directly
          given to the concerned person, if his/her name is written on it and
          then, it is maintained in Internal Daak / Letter Register.
        </li>
        <li className="sop-list-item">
          All Letters / Envelopes which are dispatched by the assigned person
          are recorded in the Dispatch Register with a unique D.NO, along with
          date, Addressee details and the subject/purpose of the letter.
          However, details of confidential letter are not mentioned.
        </li>
      </ul>
      <h3 className="sop-subsection-title">
        Disposal of Received Applications/Letters/Notices/Envelopes
      </h3>
      <ul>
        <li className="sop-list-item">
          Applications/Letters/Notices/Envelopes addressed to the Chairperson
          are received at the office desk and details are entered in the Receipt
          Register.
        </li>
        <li className="sop-list-item">
          Section officer shows applications/letters/notices/envelopes to the
          Chairperson.
        </li>
        <li className="sop-list-item">
          Chairperson takes the decision and the same is communicated to the
          concerned person or committee by the office depending on the matter of
          applications/letters/notices/envelopes.
        </li>
        <li className="sop-list-item">
          If application/letter/notice/envelope is marked to the concerned
          committee for their remarks or necessary action then after the
          recommendation/suggestion of the respective committee, the same is put
          before the Chairperson and final decision is taken in this regard.
        </li>
        <li className="sop-list-item">
          If application/letter/notice/envelope is marked to the concerned
          person then a proper action is taken in consultation with Chairperson.
        </li>
        <li className="sop-list-item">
          The reply/response in the form of some decision is communicated to the
          concerned office/person.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Draft Preparation</h3>
      <ul>
        <li className="sop-list-item">
          Responding to important papers immediately, preparing DFA from it and
          getting them sent to the concerned Department/ Section on Peon Book.
        </li>
      </ul>
      <h3 className="sop-subsection-title">
        Files Maintenance and Other Works
      </h3>
      <ul>
        <li className="sop-list-item">
          A copy of every letter whether dispatched or received, is maintained
          in the correspondence file of the Department.
        </li>
        <li className="sop-list-item">
          Personal Files of all teaching, non-teaching staff and Research
          Scholars are also maintained in the office.
        </li>
        <li className="sop-list-item">
          All Leave records of teaching and non-teaching staff are also
          maintained in Leave Register by the office.
        </li>
        <li className="sop-list-item">
          Movement register is maintained in the department, if any staff member
          moves outside during duty hours.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Official E-mail Handling</h3>
      <ul>
        <li className="sop-list-item">
          There is an official Email ID for Chairperson.
        </li>
        <li className="sop-list-item">
          The Email received from the other Departments/Sections/Students is
          printed and shown to the Chairperson by the office staff.
        </li>
        <li className="sop-list-item">
          Further DFA is prepared and reply is sent accordingly as instructed.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Notice Board Maintenance</h3>
      <ul>
        <li className="sop-list-item">
          Department has different notice boards for each programme and a
          General Notice board for general circulars and other papers.
        </li>
        <li className="sop-list-item">
          Information is displayed on the Notice Board pertaining to Exam,
          Scholarship and other related information for students and staff.
        </li>
      </ul>
      <h3 className="sop-subsection-title">Accounts Book Maintenance</h3>
      <ul>
        <li className="sop-list-item">
          All the purchase is done according to GFR-2017 rule.
        </li>
        <li className="sop-list-item">
          The office maintains all books of accounts like:
          <ul>
            <li className="sop-list-item">a. Cash Book</li>
            <li className="sop-list-item">b. Imprest Register</li>
            <li className="sop-list-item">c. Budget Controlling Register</li>
            <li className="sop-list-item">d. Advance Register etc.</li>
          </ul>
        </li>
        <li className="sop-list-item">
          Inventory records are maintained using:
          <ul>
            <li className="sop-list-item">
              a. Stock Register (Consumable and Stationery)
            </li>
            <li className="sop-list-item">b. Repair Register</li>
            <li className="sop-list-item">c. Entertainment Register</li>
            <li className="sop-list-item">d. Workshop/Conference Register</li>
            <li className="sop-list-item">e. Rickshaw/Photocopy Register</li>
            <li className="sop-list-item">f. Miscellaneous Register.</li>
          </ul>
        </li>
      </ul>

      <h2 className="sop-section-title">
        E. SOP of Training and Placement Cell (Computer Science)
      </h2>
      <ol>
        <li className="sop-list-item">
          The Department of Computer Science has a dedicated Training and
          Placement Cell. For each session, a new placement brochure is prepared
          which is shared with HRs of the companies.
        </li>
        <li className="sop-list-item">
          The HRs of companies are contacted and an invitation is extended to
          them to conduct the placement drives.
        </li>
        <li className="sop-list-item">
          When a company approaches to the Placement Cell for recruitment, the
          students are informed with all the necessary details such as Job
          Description, Salary Package, Location etc.
        </li>
        <li className="sop-list-item">
          Interested students are required to register in the placement drive of
          the company of their interest.
        </li>
        <li className="sop-list-item">
          After their due process of recruitment, companies share the list of
          selected students to the Placement Cell.
        </li>
        <li className="sop-list-item">
          Placement Cell circulates the list of selected students among
          stakeholders.
        </li>
      </ol>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <StandardOperatingProcedures />
    </Layout>
  );
};

export default App;
