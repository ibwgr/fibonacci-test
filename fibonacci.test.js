'use strict'

import assert from 'assert'
import fib from './fibonacci'

describe('fibonacci', function(){
    describe('with n = 0', function(){
        it('should return 0', function(){
            assert.equal(0, fib(0))
        })
    })
})