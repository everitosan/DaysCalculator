const expect = require('chai').expect
const DaysCalculator = require('..').default

describe('DaysCalculator', function() {
  it('Should get months list', function () {
    const months = DaysCalculator.months
    expect(months.length).to.equal(12)
    expect(months[11]).to.equal('Diciembre')
    expect(months[0]).to.equal('Enero')
  })

  it('Should get the days based on month and year', function() {
    const december = 11,
          year1 = 2017,
          february = 1,
          year2 = 2018

    const days1 = DaysCalculator.getMonthDays(december, year1)
    const days2 = DaysCalculator.getMonthDays(february, year2)

    expect(days1).to.equal(31);
    expect(days2).to.equal(28);
  })

  it('Should get the list of available days of a month', function() {
    const daysOfNovember2017 = DaysCalculator.getMonthAbleDays(10, 2017)
    const daysOfDecember2017 = DaysCalculator.getMonthAbleDays(11, 2017)

    expect(daysOfNovember2017.length).to.equal(22)
    expect(daysOfNovember2017.includes(3)).to.equal(true)
    expect(daysOfNovember2017.includes(4)).to.equal(false)
    expect(daysOfNovember2017.includes(6)).to.equal(true)

    expect(daysOfDecember2017.length).to.equal(21)
    expect(daysOfDecember2017.includes(1)).to.equal(true)
    expect(daysOfDecember2017.includes(2)).to.equal(false)
    expect(daysOfDecember2017.includes(3)).to.equal(false)
  })
})
