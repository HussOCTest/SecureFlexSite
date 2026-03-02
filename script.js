document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',async(e)=>{
      e.preventDefault();
      const data={
        fullName:form.fullName.value,
        email:form.email.value,
        phone:form.phone.value,
        service:form.service.value,
        message:form.message.value
      };
      // send to a stub endpoint; replace with real backend
      try{
        await fetch('https://formspree.io/f/your-id',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
        alert('Thanks — we received your request.');
        form.reset();
      }catch(err){
        alert('Submission failed. Please email info@secureflex.uk');
      }
    })
  }
})