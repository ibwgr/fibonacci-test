import assert from 'assert'
import {fibonacci} from './fibonacci.mjs'
import {describe, it} from 'mocha'

describe('fibonacci', function(){
    describe('with n = 0', function(){
        it('should return an empty array', function(){
            assert.deepStrictEqual([], fibonacci(0))
        })
    })

    describe('with n = 5', function(){
        it('should return the five correct fibonacci items', function(){
            assert.deepStrictEqual([0, 1, 1, 2, 3], fibonacci(5))
        })
        describe('last item', function(){
            it('should be 3', function(){
                assert.strictEqual(3, fibonacci(5).pop())
            })
        })
    })
})
