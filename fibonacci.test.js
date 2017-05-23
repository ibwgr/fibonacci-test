'use strict'

import assert from 'assert'
import fib from './fibonacci'

describe('fibonacci', function(){
    describe('with n = 0', function(){
        it('should return an empty array', function(){
            assert.deepEqual([], fib(0))
        })
    })

    describe('with n = 5', function(){
        it('should return the five correct fibonacci items', function(){
            assert.deepEqual([0, 1, 1, 2, 3], fib(5))
        })
        describe('last item', function(){
            it('should be 3', function(){
                assert.strictEqual(3, fib(5).pop())
            })
        })
    })
})