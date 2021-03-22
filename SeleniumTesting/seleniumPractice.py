from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

import time

browser = webdriver.Firefox(executable_path="../drivers/geckodriver")
browser.get('http://localhost:3000')
browser.find_element(By.NAME, "q").send_keys("Selenium", Keys.RETURN)

time.sleep(5)

browser.quit()
