class InterestController {
  constructor () {
    this.renderInterestResult = this.renderInterestResult.bind(this)
  }

  calcInterest (capital, interestRate, years) {
    return capital * (interestRate / 100) * years
  }

  renderInterest (req, res) {
    res.render('interest')
  }

  renderInterestResult (req, res) {
    const payload = req.body

    res.render('interest', {
      capital: payload.capital,
      interestRate: payload.interestRate,
      years: payload.years,
      result: this.calcInterest(payload.capital, payload.interestRate, payload.years)
    })
  }
}

module.exports = InterestController
