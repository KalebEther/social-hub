
import Button from 'react-bootstrap/Button';

function PageContent() {

    function toggleMenu(){

        document.getElementById("slideMenu").classList.toggle('active');

    }
    
    return (
        <div className="page-content position-relative">
            <Button onClick={toggleMenu} variant="primary" id="sidebarToggleButton">Toggle the Menu</Button>
        </div>
    )
}

export default PageContent;