import { main } from '.'

describe('main()', () => {
  it('print message', () => {
    const log = jest.spyOn(console, 'log').mockReturnValue()
    main()
    expect(log).nthCalledWith(1, 'Hello, world!')
    log.mockRestore()
  })
})
