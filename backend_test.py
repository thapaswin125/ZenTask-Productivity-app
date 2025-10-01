import requests
import sys
import json
import time
from datetime import datetime

class EnergyFlowAPITester:
    def __init__(self, base_url="https://focusforge-13.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.test_results = {}

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers, params=params, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:300]}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:300]
                })

            self.test_results[name] = {
                "success": success,
                "status_code": response.status_code,
                "response": response.json() if success and response.text else response.text
            }

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            self.test_results[name] = {
                "success": False,
                "error": str(e)
            }
            return False, {}

    def test_energy_management(self):
        """Test energy level management endpoints"""
        print("\n" + "="*50)
        print("TESTING ENERGY MANAGEMENT")
        print("="*50)
        
        # Test getting current energy (should work even if no data)
        success, response = self.run_test(
            "Get Current Energy",
            "GET",
            "energy/current",
            200
        )
        
        # Test logging energy level
        success, response = self.run_test(
            "Log Energy Level",
            "POST",
            "energy",
            200,
            data={"level": 8, "context": "After morning coffee"}
        )
        
        # Test getting energy history
        success, response = self.run_test(
            "Get Energy History",
            "GET",
            "energy/history",
            200
        )
        
        return success

    def test_task_management(self):
        """Test task management endpoints"""
        print("\n" + "="*50)
        print("TESTING TASK MANAGEMENT")
        print("="*50)
        
        # Test creating a task
        task_data = {
            "title": "Test Task - API Testing",
            "description": "This is a test task created during API testing",
            "energy_requirement": 6,
            "estimated_duration": 45,
            "priority": "high",
            "category": "Testing"
        }
        
        success, response = self.run_test(
            "Create Task",
            "POST",
            "tasks",
            200,
            data=task_data
        )
        
        task_id = None
        if success and 'id' in response:
            task_id = response['id']
            print(f"   Created task with ID: {task_id}")
        
        # Test getting all tasks
        success, response = self.run_test(
            "Get All Tasks",
            "GET",
            "tasks",
            200
        )
        
        # Test getting pending tasks only
        success, response = self.run_test(
            "Get Pending Tasks",
            "GET",
            "tasks",
            200,
            params={"completed": False}
        )
        
        # Test getting recommended tasks
        success, response = self.run_test(
            "Get Recommended Tasks",
            "GET",
            "tasks/recommended",
            200
        )
        
        # Test completing a task (if we have a task ID)
        if task_id:
            success, response = self.run_test(
                "Complete Task",
                "PATCH",
                f"tasks/{task_id}/complete",
                200
            )
        
        return success

    def test_focus_sessions(self):
        """Test focus session endpoints"""
        print("\n" + "="*50)
        print("TESTING FOCUS SESSIONS")
        print("="*50)
        
        # Test starting a focus session
        session_data = {
            "duration": 25,
            "energy_before": 7,
            "environment_type": "nature"
        }
        
        success, response = self.run_test(
            "Start Focus Session",
            "POST",
            "focus-sessions",
            200,
            data=session_data
        )
        
        session_id = None
        if success and 'id' in response:
            session_id = response['id']
            print(f"   Created session with ID: {session_id}")
        
        # Test getting focus session stats
        success, response = self.run_test(
            "Get Focus Session Stats",
            "GET",
            "focus-sessions/stats",
            200
        )
        
        # Test completing a focus session (if we have a session ID)
        if session_id:
            success, response = self.run_test(
                "Complete Focus Session",
                "PATCH",
                f"focus-sessions/{session_id}/complete",
                200,
                params={"energy_after": 6, "productivity_rating": 4}
            )
        
        return success

    def test_ai_features(self):
        """Test AI coaching endpoints"""
        print("\n" + "="*50)
        print("TESTING AI FEATURES")
        print("="*50)
        
        # Test AI insight (this might take longer due to LLM processing)
        print("⏳ Testing AI insight (may take 10-15 seconds)...")
        success, response = self.run_test(
            "Get AI Insight",
            "POST",
            "ai/insight",
            200,
            data={
                "question": "How can I improve my productivity?",
                "context": "I have low energy in the afternoons"
            }
        )
        
        # Test daily summary (this might also take longer)
        print("⏳ Testing daily summary (may take 10-15 seconds)...")
        success, response = self.run_test(
            "Get Daily Summary",
            "GET",
            "ai/daily-summary",
            200
        )
        
        return success

    def test_dashboard_stats(self):
        """Test dashboard statistics endpoint"""
        print("\n" + "="*50)
        print("TESTING DASHBOARD STATS")
        print("="*50)
        
        success, response = self.run_test(
            "Get Dashboard Stats",
            "GET",
            "dashboard/stats",
            200
        )
        
        return success

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting EnergyFlow API Testing...")
        print(f"Base URL: {self.base_url}")
        print(f"API URL: {self.api_url}")
        
        start_time = time.time()
        
        # Run all test suites
        self.test_energy_management()
        self.test_task_management()
        self.test_focus_sessions()
        self.test_dashboard_stats()
        
        # AI tests last as they take longer
        self.test_ai_features()
        
        end_time = time.time()
        
        # Print final results
        print("\n" + "="*60)
        print("FINAL TEST RESULTS")
        print("="*60)
        print(f"📊 Tests passed: {self.tests_passed}/{self.tests_run}")
        print(f"⏱️  Total time: {end_time - start_time:.2f} seconds")
        print(f"✅ Success rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.failed_tests:
            print(f"\n❌ Failed tests ({len(self.failed_tests)}):")
            for failure in self.failed_tests:
                error_msg = failure.get('error', f"Expected {failure.get('expected')}, got {failure.get('actual')}")
                print(f"   - {failure['test']}: {error_msg}")
        
        return self.tests_passed == self.tests_run

def main():
    tester = EnergyFlowAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "total_tests": tester.tests_run,
            "passed_tests": tester.tests_passed,
            "success_rate": (tester.tests_passed/tester.tests_run*100) if tester.tests_run > 0 else 0,
            "failed_tests": tester.failed_tests,
            "detailed_results": tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())