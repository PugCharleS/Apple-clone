export const Form = ({handleChange, validateForm, dataForm, makePurchase}) => {
  return (
    <form className="bolsa-info-form" onChange={handleChange}>
      <input
        type="text"
        name="name"
        id='name'
        placeholder="name"
        onChange={handleChange}
        value={dataForm.name}
        />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        onChange={handleChange}
        value={dataForm.phone}
        />
      <br />
      <input
        type="email"
        id='email'
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={dataForm.email}
        />
      <br />
      <br />
      <button className="bolsa-info-button" disabled={!validateForm()} onClick={makePurchase}>Pagar</button>
    </form>  
  )
}