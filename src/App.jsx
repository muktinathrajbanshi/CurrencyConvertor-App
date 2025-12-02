import React from 'react';

const App = () => {

  return (
      <section className="currency-converter">
        <div className="currency-div">
          <h1>Currency Converter</h1>
          <div>
            <label htmlFor="currency_amount">
            Amount:
            <input type="number" id="currency_amount" />
            </label>
          </div>

          <div className="currency-selector">
            <div>
              <label htmlFor="">
                From:
                <select>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="NEP">NEP</option>
                  <option value="AUD">AUD</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="">
                To:
                <select>
                  <option value="NEP">NEP</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="AUD">AUD</option>
                </select>
              </label>
            </div>
          </div>

          <button>{loading ? "Converting.." : "Convert"}</button>
        </div>
      </section>
  );
};

export default App;
