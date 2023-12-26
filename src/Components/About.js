import Header from "./Header";

const About = () => {
    return (
        <div className="about-us">
            <Header />
             <h1 className='header'>About Us</h1>
             <p>An order book comes with a table of data consisting of GE projects related data. 
                Most of the order books come with a visual demonstration as well. 
                In this way, the reader can quickly achieve an overall understanding of market demand and Related information.</p>

                <p> This website stores project-related information in CSV format.
                Users can add, update, and delete the existing records. 
                Users can search the available records based on requirements, export the search results into specific formats, 
                and sort the individual column data.</p>
        </div>
    )
}
export default About;