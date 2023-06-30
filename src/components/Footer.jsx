import '../styles/footer.css'
function Footer() {
    const date = new Date()
    const results = date.toLocaleDateString('en-GB')
  return (
    <div className="footer">
       <p>HelloEvents</p>
       <h4>copyright &copy; 2023</h4>
       <p>{results}</p>
    </div>
  )
}

export default Footer