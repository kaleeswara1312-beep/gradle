package com.example;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class AppTest
{
    public AppTest(){
        System.out.println("Constructor invoked");
    }

    @BeforeClass
    static public void beforeClass(){
        System.out.println("Before all");
    }

    @Before
    public void init(){
        System.out.println("Init");
    }

    @Test
    public void Testing(){
        Arithmetic art = new Arithmetic();
        int actual = art.add(23, 34);
        assertEquals(57, actual);
    }

    @Test
    public void Testing2(){
        assertNotEquals(23, 56);
        assertTrue(true);
        assertFalse(false);

        int arr[] = {1,2,45,5};

        assertArrayEquals(arr, arr );
    }

    @After
    public void Destroy(){
        System.out.println("After");
    }

    @AfterClass
    static public void afterClass(){
        System.out.println("Before all");
    }

}
